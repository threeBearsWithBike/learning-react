import './Game.css';
import Square from './Square';

export default function Game() {
    return (
        <table>
            <tr>
                <td className='Game__square'>
                    <Square />
                </td>
                <td className='Game__square'>
                    <Square />
                </td>
                <td className='Game__square'>
                    <Square />
                </td>
            </tr>
            <tr>
                <td className='Game__square'>
                    <Square />
                </td>
                <td className='Game__square'>
                    <Square />
                </td>
                <td className='Game__square'>
                    <Square />
                </td>
            </tr>
            <tr>
                <td className='Game__square'>
                    <Square />
                </td>
                <td className='Game__square'>
                    <Square />
                </td>
                <td className='Game__square'>
                    <Square />
                </td>
            </tr>
        </table>
    )
}