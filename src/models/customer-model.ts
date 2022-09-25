import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface MyModel extends Model {
    // readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
export type CustomerModelStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): MyModel;
}

export default function (sequelize: Sequelize): CustomerModelStatic {

    let customer = <CustomerModelStatic>sequelize.define("Customer", {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        hash_password: {
            type: DataTypes.STRING
        },
        salt: {
            type: DataTypes.STRING
        },
        key: {
            type: DataTypes.STRING
        },
        payload: {
            type: DataTypes.JSON
        },
        address: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "Active"
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
        tableName: 'customer'
    });

    return customer;
}