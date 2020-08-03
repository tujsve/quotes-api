import { Request, Response } from 'express';
import { QuoteRepository } from './../repositories/quote-repository';
import { Quote } from '../models/quote-model';

export const getAllQuotes = (request: Request, response: Response) => {
    let quoteRepository = new QuoteRepository(); 
    quoteRepository.getAllQuotes().then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    })
}

export const getQuoteByID = (request: Request, response: Response) => {
    let quoteRepository = new QuoteRepository();
    quoteRepository.getQuoteByID(+request.params.id).then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    })
}

export const insertQuote = (request: Request, response: Response) => {
    let quote = new Quote();
    quote.quoteDate = request.body.quoteDate;
    quote.quoteText = request.body.quoteText;
    quote.quoteNarrator = request.body.quoteNarrator;
    
    let quoteRepository = new QuoteRepository();
    quoteRepository.insertQuote(quote).then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    })
}

export const updateQuote = (request: Request, response: Response) => {
    let quote = new Quote();
    quote.id = request.body.id;
    quote.quoteDate = request.body.quoteDate;
    quote.quoteText = request.body.quoteText;
    quote.quoteNarrator = request.body.quoteNarrator;
    
    let quoteRepository = new QuoteRepository();
    quoteRepository.updateQuote(quote).then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    })
}

export const deleteQuote = (request: Request, response: Response) => {
    let quoteRepository = new QuoteRepository();
    quoteRepository.deleteQuote(+request.params.id).then(data => {
        response.send({
            status: "OK", 
            data
        });
    }).catch(err => {
        response.send(err);
    })
}