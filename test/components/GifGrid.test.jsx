import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs' );

describe('pruebas en <GifGrid />', () => { 

  const category = 'One Punch'
 
    test('debe de mostrar el loading inicialmente',() => {

      useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
      });

      render( <GifGrid category={ category } /> );
      expect( screen.getByText('Cargando...') );
      expect( screen.getByText( category ) );

    });

    test('deven de mostrar items cuiando se cargan las imagenes useFecthGifs', () => {

        const gifs = [
          {
            id: 'ABC',
            title: 'Saitama',
            url: 'http://localHost/saitama.jpg'
          },
          {
            id: '123',
            title: 'Goku',
            url: 'http://localhost/goku.jpg'
          },
        ]

      useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
      });

      render( <GifGrid category={ category } /> );
      expect( screen.getAllByRole('img').length ).toBe(2);
      

    });
 });