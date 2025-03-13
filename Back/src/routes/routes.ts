import { Express } from 'express';
import express from 'express'
import pokedex from '../routes/pokedex.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/pokedex', pokedex)
}

