import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("quotes")
export class Quote {

    @PrimaryGeneratedColumn({
        name: "id"
    })
    id: number;

    @Column({
        name: "quote_text",
        nullable: false, 
        length: 500,
        type: "varchar"
    })
    quoteText: string;

    @Column({
        name: "quote_narrator",
        nullable: true,
        length: 100,
        type: 'varchar'
    })
    quoteNarrator: string;

    @Column({
        name: 'quote_date', 
        nullable: false,
        type: 'date'
    })
    quoteDate: Date;
}