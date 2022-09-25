import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { constants } from '../common/constant';

// We need to declare an interface for our model that is basically what our class would be
interface MyModel extends Model {
    // readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
export type OrderModelStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): MyModel;
}

export default function (sequelize: Sequelize): OrderModelStatic {

    let order = <OrderModelStatic>sequelize.define("Order", {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_id: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        total_amount: {
            type: DataTypes.DECIMAL
        },
        delivery_address: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
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
        },

    }, {
        indexes: [],
        timestamps: false,
        freezeTableName: true,
        tableName: 'order'
    });

    return order;
}