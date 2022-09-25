import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { constants } from '../common/constant';

// We need to declare an interface for our model that is basically what our class would be
interface MyModel extends Model {
    // readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
export type OrderDetailModelStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): MyModel;
}

export default function (sequelize: Sequelize): OrderDetailModelStatic {

    let orderDetail = <OrderDetailModelStatic>sequelize.define("OrderDetail", {
        order_detail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        customer_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        order_id: {
            type: DataTypes.INTEGER
        },
        ordered_quantity: {
            type: DataTypes.DECIMAL
        },
        total_amount: {
            type: DataTypes.DECIMAL
        },
        delivery_datetime: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: constants.Active
        },
        created_by: {
            type: DataTypes.INTEGER
        },
        created_dt: {
            type: DataTypes.DATE
        },
        updated_by: {
            type: DataTypes.INTEGER
        },
        updated_dt: {
            type: DataTypes.DATE
        }

    }, {
        indexes: [],
        timestamps: false,
        freezeTableName: true,
        tableName: 'order_details'
    });

    return orderDetail;
}