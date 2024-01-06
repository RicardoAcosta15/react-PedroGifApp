// eslint-disable-next-line no-unused-vars
import { render,screen,getByText } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

/* eslint-disable no-undef */
describe('Pruebas en <GifItem/>', ()=>{
    const title ='Buenas buenas'
    const url = 'hhtps://one-punch.com'

    test('debe hacer match con el snapshot', ()=>{

       const {container}= render(<GifItem title={title} url ={url} />)
       expect(container).toMatchSnapshot()
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', ()=>{
        render(<GifItem title={title} url ={url} />);
        //screen.debug()
        const {src} = screen.getByRole('img')
        expect(src).toBe(url);
    })

    

    
});