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
            const botao = getByText(container,'Clique Aqui!');
            const nomeInput = getByTestId(container,'nome-anime');
            const descInput = getByTestId(container,'desc-anime');
      
            nomeInput.value = "digitei algo"
            descInput.value = "digitei de novo"
      
            fireEvent.click(botao);
            
            let qtdTrs = container.querySelectorAll('#tbody tr');
            expect(qtdTrs.length).toBe(2)
      
            nomeInput.value = "digitei pela segunda vez"
            descInput.value = "digitei porque quiz"
      
            fireEvent.click(botao);
            
            qtdTrs = container.querySelectorAll('#tbody tr');
            expect(qtdTrs.length).toBe(4)
            
            nomeInput.value = "digitei pela terceira vez"
            descInput.value = "digitei porque quiz"
      
            fireEvent.click(botao);
            
            qtdTrs = container.querySelectorAll('#tbody tr');
            expect(qtdTrs.length).toBe(6)
        })
        it('checar valor',()=>{
            const botao = getByText(container,'Clique Aqui!');
            const nomeInput = getByTestId(container,'nome-anime');
            const descInput = getByTestId(container,'desc-anime');
      
            nomeInput.value = "One Piece"
            descInput.value = "Pirata que estica"
      
            fireEvent.click(botao);
            
            let qtdTrs = container.querySelectorAll('#tbody tr');
            expect(qtdTrs[0].children[1].innerHTML).toBe("One Piece")
            expect(qtdTrs[0].children[2].innerHTML).toBe("Pirata que estica")
        })
        it('checa se o valor fica vazio',()=>{
            const botao = getByText(container,'Clique Aqui!');
            const nomeInput = getByTestId(container,'nome-anime');
            const descInput = getByTestId(container,'desc-anime');
      
            nomeInput.value = "digitei algo"
            descInput.value = "digitei de novo"
      
            fireEvent.click(botao);

            expect(nomeInput.value).toBe('')
            expect(descInput.value).toBe('')
        })

    })
})