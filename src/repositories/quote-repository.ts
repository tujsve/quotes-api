import { getManager } from "typeorm"
import { Quote } from "../models/quote-model"

export class QuoteRepository {

    getAllQuotes = () => {
        return getManager().getRepository(Quote).find();
    }

    getQuoteByID = (id: number) => {
        return getManager().getRepository(Quote).findOne(id);
    }

    insertQuote = (quote:Quote) => {
        return getManager().getRepository(Quote).insert(quote);
    } 

    updateQuote = (quote:Quote) => {
        return getManager().getRepository(Quote).save(quote);
    }

    deleteQuote = (id: number) => {
        return getManager().getRepository(Quote).delete(id);
    }

}