import express from 'express';
import * as quotesController from './../controllers/quotes-controller';

const quotesRouter = express.Router();

quotesRouter.route('').get(quotesController.getAllQuotes)
                      .post(quotesController.insertQuote)
                      .put(quotesController.updateQuote); 
      
quotesRouter.route('/:id').get(quotesController.getQuoteByID)
                          .delete(quotesController.deleteQuote);

export default quotesRouter;

