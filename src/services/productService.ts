import { models } from "../models/model";
import * as path from "path";
import { normalize } from "path";
import * as  fs from "fs";
import commonService from "./commonService";
import async = require("async");
import _ = require("lodash");

export interface EntityAttributes { }

export class ProductService {

    public productImport(req: any, callback: Function) {

        var data: any = req.body;
        var session: any = req.session;
        data.customer_id = session.customer_id;
        data.created_by = session.customer_id;
        data.created_dt = new Date().toISOString();

        if (req.files.uploadFile) {
            if (_.isArray(req.files.uploadFile)) {
                var requiredFile = req.files.uploadFile[0]
            } else {
                var requiredFile = req.files.uploadFile
            }
        }

        async.waterfall([
            function (waterfallCallback) {
                var FilePath: any = "upload/importExcel/" + Date.now() + '.' + requiredFile.name.split('.').pop().toLowerCase();

                requiredFile.mv(FilePath, function (err, data) {
                    if (err) {
                        var error = new Error("Something is wrong in folder Creation , please try again later")
                        waterfallCallback(err, null)
                    } else {
                        waterfallCallback(null, FilePath);
                    }
                });
            },
            function (FilePath: any, waterfallCallback: Function) {

                const excelToJson = require('convert-excel-to-json');

                const result = excelToJson({
                    sourceFile: normalize(path.resolve(__dirname + "/../../../" + FilePath)),
                    columnToKey: {
                        B: 'product_name',
                        C: 'price',
                        D: 'product_id',
                        E: 'description'
                    },
                    header: {
                        rows: 1
                    },
                    sheets: ['Sheet1']
                });
                waterfallCallback(null, FilePath, result.Sheet1);
            },
            function (FilePath: any, result: any, waterfallCallback: Function) {

                //Remove File From server
                fs.unlinkSync(normalize(path.resolve(__dirname + "/../../../" + FilePath)));

                async.waterfall([
                    function (waterfallCallback: Function) {

                        result.forEach((value) => {
                            value.customer_id = session.customer_id;
                        })

                        commonService.bulkCreate(result, models.Product, function (err: any, response: any) {
                            waterfallCallback(err, response)
                        })
                    }
                ], function (err: any, response: any) {
                    waterfallCallback(err, response)
                })
            }
        ], function (err, result) {
            callback(err, result)
        })
    }
}

export const productService = new ProductService()
export default productService