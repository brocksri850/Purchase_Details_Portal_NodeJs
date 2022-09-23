import { logger } from "../common/logger";

export interface EntityAttributes { }

export class CommonService {

    create(entityAttributes: EntityAttributes, accessObject: any, callback: Function) {
        accessObject.create(entityAttributes).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    findAll(condition: EntityAttributes, accessObject: any, callback: Function) {
        accessObject.findAll(condition).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    bulkCreate(entityAttributes: EntityAttributes, accessObject: any, callback: Function) {
        accessObject.bulkCreate(entityAttributes).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    update(entityAttributes: any, condition: EntityAttributes, accessObject: any, callback: Function) {
        accessObject.update(entityAttributes, condition).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            console.log(error)
            callback(error, null);
        });
    }

    findOne(condition: any, accessObject: any, callback: Function) {
        accessObject.findOne(condition).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    destroy(condition: EntityAttributes, accessObject: any, callback: Function) {
        accessObject.destroy(condition).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    findOrCreate(condition, entityAttributes: EntityAttributes, accessObject: any, callback: Function) {
        accessObject.findOrCreate({ where: condition, defaults: entityAttributes }).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    multiUpdateOrCreate(entityAttributes: EntityAttributes, updateFields: any, accessObject: any, callback: Function) {
        accessObject.bulkCreate(entityAttributes, { updateOnDuplicate: updateFields }).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }

    findAndCountAll(condition: any, accessObject: any, callback: Function) {
        accessObject.findAndCountAll(condition).then((entity: any) => {
            return callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            return callback(error, null);
        });
    }

    count(condition: any, accessObject: any, callback: Function) {
        accessObject.count(condition).then((entity: any) => {
            callback(null, entity);
        }).catch((error: Error) => {
            logger.error(error.message);
            callback(error, null);
        });
    }


}

export const commonService = new CommonService()
export default commonService