import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
// We need to declare an interface for our model that is basically what our class would be
interface MyModel extends Model {
    // readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
export type ProductModelStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): MyModel;
}

export default function (sequelize: Sequelize): ProductModelStatic {

    let product = <ProductModelStatic>sequelize.define("Product", {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        customer_id: {
            type: DataTypes.INTEGER
        },
        product_name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        price: {
            type: DataTypes.DECIMAL
        },
        product_id_uniq: {
            type: DataTypes.STRING,
            unique: true
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Active'
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
        tableName: 'product'
    });

    return product;
}