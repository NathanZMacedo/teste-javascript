import { getByText, getByTestId, fireEvent} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect'
import {JSDOM} from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

let dom 
let container


describe('testando o index.html', ()=>{
    beforeEach (()=>{
        const options= {
            resources: 'usable',
            runScripts: 'dangerously',
        }
        dom = new JSDOM(html,options)
        container = dom.window.document.body
        dom.window.eval(script);
    })
    describe('input checagem',()=>{
        it('checar se aumenta os itens da tabela',()=>{
            const botao =  getByText(container,'Clique Aqui!');
            const nomeInput = getByTestId(container,'nome-anime');
            const descInput =  getByTestId(container,'desc-anime');

            nomeInput.value = "digitei algo"
            descInput.value = "digitei de novo"

            fireEvent.click(botao)

            let qtdTrs = container.quuerySelectorAll('#tbody tr');
            expect(qtdTrs.length).toBe(1)
        })
    })
})