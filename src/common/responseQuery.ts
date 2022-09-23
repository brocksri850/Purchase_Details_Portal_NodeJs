import * as _ from "lodash";
import constant from "./constant";

class RouterResponse {

    public res: any

    objResponse(err, result: any, req: any, res: any) {

        var response = {} as any;
        let query: any = req.query;

        if (_.isError(err) || !_.isEmpty(err)) {
            response = {
                status: false,
                message: "Internal Error",
                code: 500,
                Error: err.message
            }
        } else if (!_.isEmpty(result)) {
            response = {
                status: true,
                code: 200,
                message: "Success",
                data: result
            }
            if (result && result.rows) {
                response.data = result.rows;
                response.pagination = {
                    totalCount: result.count ? result.count : 0,
                    limit: constant.Offset
                };
                response.pagination.currentPage = Number(query.page) ? parseInt(query.page) : 1;
                response.pagination.currentPageFirstSlNo = ((Number(response.pagination.currentPage) - 1) * constant.Offset) + 1;
                response.pagination.currentPageLastSlNo = (response.pagination.currentPageFirstSlNo + result.rows.length) - 1;

                if (result.other) response.other = result.other
            } else {
                response.data = result
                delete response.data.msg;
            };

        } else {
            response = {
                status: true,
                code: 201,
                message: "Data Not Found",
                data: result
            }
        }

        return response
    }

    public getPagenationQuery(query) {

        var pageNumber = query.pageNumber || 0;

        if (pageNumber == 0) {
            query.offset = 0;
            query.limit = constant.Offset
            return query;
        }
        query.offset = (pageNumber * constant.Offset) - constant.Offset;
        query.limit = constant.Offset
        return query;
    }


    public checkPassword(password) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password)
    }
}

export const routerResponse = new RouterResponse();