import async = require("async");
import { Op, Sequelize } from "sequelize";
import { models } from "../models/model";
import commonService from "./commonService";

export interface EntityAttributes { }

export class OrderDetailservice {

    public orderdProductBaseCustomer(req: any, callback: Function) {

        var session = req.session;
        var data = req.body;

        var condition: any = {
            where: {
                customer_id: session.customer_id,
                status: "Active"
            },
            includes: [
                { model: models.Customer, atrributes: ['customer_id', 'first_name', 'last_name', 'email', 'phone', 'address'] }
            ],
            group: ['product_id'],
            attributes: ['customer_id', 'order_id', 'product_id', 'ordered_quantity', 'total_amount', 'delivery_datetime', 'status', 'created_dt', [Sequelize.literal(`COUNT(order_detail_id)`), 'product_count']]
        }

        condition.where.created_dt = { [Op.between]: [data.startCreatedDt, data.endCreatedDt] };

        if (req.query.sort == "Descending") {
            condition.order = [['delivery_datetime', 'DESC']]
        } else if (req.query.sort == "Ascending") {
            condition.order = [['delivery_datetime', 'ASC']]
        }

        if (req.query.search) {
            if (req.query.search) {
                condition.where.order_id = {
                    [Op.like]: "%" + req.query.search + "%"
                }
            }
            condition.limit = 5;
        }

        async.parallel({
            count: function (parallelCallback: Function) {
                let countCondition: any = { where: condition.where };
                commonService.count(countCondition, models.OrderDetail, function (err: Error, response: any) {
                    parallelCallback(err, response);
                });
            },
            rows: function (parallelCallback: Function) {
                commonService.findAll(condition, models.OrderDetail, function (err: Error, response: any) {
                    parallelCallback(err, response);
                });
            }
        }, function (err, result) {
            callback(err, result)
        })
    }
}

export const orderDetailservice = new OrderDetailservice()
export default orderDetailservice