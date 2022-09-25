import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as fileUpload from 'express-fileupload';
import * as errorHandler from 'errorhandler';
import * as methodOverride from 'method-override';

import customerRoutes from './routes/customerRoutes';
import orderRoutes from './routes/orderRoutes';
import productRoutes from './routes/productRoutes';
import orderDetailRoutes from './routes/orderDetailsRoutes';


export class Server {

  public app: any;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public static bootstrap(): Server {
    return new Server();
  }

  public config() {
    // add static paths
    this.app.use(express.static(path.join(__dirname, 'public')));
    // configure pug
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');
    this.app.use(helmet());
    this.app.disable('x-powered-by');
    // mount logger
    this.app.use(logger('dev'));
    // mount json form parser
    this.app.use(bodyParser.json());
    this.app.use(compression());
    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    // mount cookie parker
    this.app.use(cookieParser('SECRET_GOES_HERE'));
    // mount override
    this.app.use(methodOverride());
    // use q promises
    global.Promise = require('q').Promise;
    // error handling
    this.app.use(errorHandler());

    // Express Upload Files middleware
    this.app.use(fileUpload());
  }
  private routes() {
    this.app.all('/adlocation/*', function (req: express.Request, res: express.Response, next: express.NextFunction,) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With,XMLHttpRequest , x-access-token, ser-data, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
      return next();
    });

    //All Routes

    this.app.use('/customer', customerRoutes);
    this.app.use('/order', orderRoutes);
    this.app.use('/product', productRoutes);
    this.app.use('/orderdetail', orderDetailRoutes);

    // Start Point
    this.app.use('/', function (req, res) {
      res.send("Welcome to My worksapce")
    })

  }

}