import { screen, render } from "@testing-library/react";
import ArrivalPage from './Components/ServiceBoards/ArrivalPage'

test('when button clicked, stations are cleared from value', () => {
    render(<ArrivalPage/>)
})