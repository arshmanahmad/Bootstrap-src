import React, { useState } from 'react'

import './App.css';
const App = () => {

    return (
        <>
            <div className='main-container'>
                <div className="table-box">
                    <table class="table caption-top">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">CLIENT NAME</th>
                                <th scope="col">ClIENT TYPE</th>
                                <th scope="col">CONTRACT NAME</th>
                                <th scope="col">CONTRACT YEAR</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">123</th>
                                <td>Ahmad Ali</td>
                                <td>Doctor,Surgeon</td>
                                <td>Complete Protection</td>
                                <td>2</td>
                                <td>5000</td>
                                <td className='color-set'><span className='word1'>Approve</span>/
                                    <span className='word2'>Deny</span></td>
                            </tr>
                            <tr>
                                <th scope="row">123</th>
                                <td>Ahmad Ali</td>
                                <td>Doctor,Surgeon</td>
                                <td>Complete Protection</td>
                                <td>2</td>
                                <td>5000</td>
                                <td className='color-set'><span className='word1'>Approve</span>/
                                    <span className='word2'>Deny</span></td>
                            </tr>

                            <tr>
                                <th scope="row">123</th>
                                <td>Ahmad Ali</td>
                                <td>Doctor,Surgeon</td>
                                <td>Complete Protection</td>
                                <td>2</td>
                                <td>5000</td>
                                <td className='color-set'><span className='word1'>Approve</span>/
                                    <span className='word2'>Deny</span></td>
                            </tr>

                            <tr>
                                <th scope="row">123</th>
                                <td>Ahmad Ali</td>
                                <td>Doctor,Surgeon</td>
                                <td>Complete Protection</td>
                                <td>2</td>
                                <td>5000</td>
                                <td className='color-set'><span className='word1'>Approve</span>/
                                    <span className='word2'>Deny</span></td>
                            </tr>

                            <tr>
                                <th scope="row">123</th>
                                <td>Ahmad Ali</td>
                                <td>Doctor,Surgeon</td>
                                <td>Complete Protection</td>
                                <td>2</td>
                                <td>5000</td>
                                <td className='color-set'><span className='word1'>Approve</span>/
                                    <span className='word2'>Deny</span></td>
                            </tr>

                            <tr>
                                <th scope="row">123</th>
                                <td>Ahmad Ali</td>
                                <td>Doctor,Surgeon</td>
                                <td>Complete Protection</td>
                                <td>2</td>
                                <td>5000</td>
                                <td className='color-set'><span className='word1'>Approve</span>/
                                    <span className='word2'>Deny</span></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default App