import { useState } from 'react';
import './Game.css';
// import Square from './Square';
import getRandomString from './getRandomString';


export default function Game() {
    const [string, setString] = useState(getRandomString());

    return (
        <table>
        <tbody>
            <tr>
                <td className='Game__square Square'>
                    {string[0]}
                </td>
                <td className='Game__square Square'>
                    {string[1]}
                </td>
                <td className='Game__square Square'>
                    {string[2]} 
                </td>
            </tr>
            <tr>
                <td className='Game__square Square'>
                    {string[3]} 
                </td>
                <td className='Game__square Square'>
                    {string[4]} 
                </td>
                <td className='Game__square Square'>
                    {string[5]} 
                </td>
            </tr>
            <tr>
                <td className='Game__square Square'>
                    {string[6]} 
                </td>
                <td className='Game__square Square'>
                    {string[7]} 
                </td>
                <td className='Game__square Square'>
                    {string[8]} 
                </td>
            </tr>
        </tbody>
    </table>
        // <table>
        //     <tbody>
        //         <tr>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //         </tr>
        //         <tr>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //         </tr>
        //         <tr>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //             <td className='Game__square'>
        //                 <Square />
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}