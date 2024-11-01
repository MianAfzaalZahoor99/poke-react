import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonDetail from '../components/pokemonDetail/PokemonDetail';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('renders select message if no pokemon selected', () => {
    render(
        <Provider store={store}>
            <PokemonDetail />
        </Provider>
    );
    expect(screen.getByText(/Select a Pokemon to see details/i)).toBeInTheDocument();
});
