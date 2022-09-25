import constant from "../common/constant";

class CommonLogics {

    constructor() { }

    public checkPassword(password) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password)
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

}

var commonLogics = new CommonLogics();
export default commonLogics;