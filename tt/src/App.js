import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage.js';
import Line_1 from './Components/Lines/Line-1/Line_1.js';
import Line_2 from './Components/Lines/Line-2/Line_2.js';
import Line_2A from './Components/Lines/Line-2A/Line_2A.js';
import Line_3 from './Components/Lines/Line-3/Line_3.js';
import Line_4 from './Components/Lines/Line-4/Line_4.js';
import Line_5 from './Components/Lines/Line-5/Line_5.js';
import Line_6 from './Components/Lines/Line-6/Line_6.js';
import Line_7 from './Components/Lines/Line-7/Line_7.js';
import Line_8 from './Components/Lines/Line-8/Line_8.js';
import Line_9 from './Components/Lines/Line-9/Line_9.js';
import Line_10 from './Components/Lines/Line-10/Line_10.js';
import Line_11 from './Components/Lines/Line-11/Line_11.js';
import Line_12 from './Components/Lines/Line-12/Line_12.js';
import Line1_Kampel from './Components/Lines/Line-1/Line1_Kampel.js';
import Line1_Koper from './Components/Lines/Line-1/Line1_Koper.js';
import Line2_Koper from './Components/Lines/Line-2/Line2_Koper.js';
import Line2_Bolnisnica from './Components/Lines/Line-2/Line2_Bolnisnica.js';
import Line3_Bolnisnica from './Components/Lines/Line-3/Line3_Bolnisnica.js';
import Line3_NadDolinsko from './Components/Lines/Line-3/Line3_NadDolinsko.js';
import Line4_Partizanska from './Components/Lines/Line-4/Line4_Partizanska.js';
import Line5_Markovec from './Components/Lines/Line-5/Line5_Markovec.js';
import Line5_TrgBrolo from './Components/Lines/Line-5/Line5_TrgBrolo.js';
import Line6_Markovec from './Components/Lines/Line-6/Line6_Markovec.js';
import Line6_Potniski from './Components/Lines/Line-6/Line6_Potniski.js';
import Line7_Potniski from './Components/Lines/Line-7/Line7_Potniski.js';
import Line8_Potniski from './Components/Lines/Line-8/Line8_Potniski.js';
import Line9_Koper from './Components/Lines/Line-9/Line9_Koper.js';
import Line10_Srmin from './Components/Lines/Line-10/Line10_Srmin.js';
import Line11_Banka from './Components/Lines/Line-11/Line11_Banka.js';
import Line11_Cimos from './Components/Lines/Line-11/Line11_Cimos.js';
import Line12_Sonce from './Components/Lines/Line-12/Line12_Sonce.js';
import Line2A_Koper from './Components/Lines/Line-2A/Line2A_Koper.js';
import Line2A_Bolnisnica from './Components/Lines/Line-2A/Line2A_Bolnisnica.js';

function App() {
  return (
    <div className='app'>
      {/* <Database /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/Linija1' element={<Line_1 />}></Route>
          <Route path='/Linija2' element={<Line_2 />}></Route>
          <Route path='/Linija2A' element={<Line_2A />}></Route>
          <Route path='/Linija3' element={<Line_3 />}></Route>
          <Route path='/Linija4' element={<Line_4 />}></Route>
          <Route path='/Linija5' element={<Line_5 />}></Route>
          <Route path='/Linija6' element={<Line_6 />}></Route>
          <Route path='/Linija7' element={<Line_7 />}></Route>
          <Route path='/Linija8' element={<Line_8 />}></Route>
          <Route path='/Linija9' element={<Line_9 />}></Route>
          <Route path='/Linija10' element={<Line_10 />}></Route>
          <Route path='/Linija11' element={<Line_11 />}></Route>
          <Route path='/Linija12' element={<Line_12 />}></Route>
          <Route path='/Linija1/Kampel' element={<Line1_Kampel />}></Route>
          <Route path='/Linija1/Koper' element={<Line1_Koper />}></Route>
          <Route path='/Linija2/Koper' element={<Line2_Koper />}></Route>
          <Route path='/Linija2/Bolnisnica' element={<Line2_Bolnisnica />}></Route>
          <Route path='/Linija2A/Koper' element={<Line2A_Koper />}></Route>
          <Route path='/Linija2A/Bolnisnica' element={<Line2A_Bolnisnica />}></Route>
          <Route path='/Linija3/Bolnisnica' element={<Line3_Bolnisnica />}></Route>
          <Route path='/Linija3/NadDolinsko' element={<Line3_NadDolinsko />}></Route>
          <Route path='/Linija4/Partizanska' element={<Line4_Partizanska />}></Route>
          <Route path='/Linija5/Markovec' element={<Line5_Markovec />}></Route>
          <Route path='/Linija5/TrgBrolo' element={<Line5_TrgBrolo />}></Route>
          <Route path='/Linija6/Markovec' element={<Line6_Markovec />}></Route>
          <Route path='/Linija6/PotniskiTerminal' element={<Line6_Potniski />}></Route>
          <Route path='/Linija7/PotniskiTerminal' element={<Line7_Potniski />}></Route>
          <Route path='/Linija8/PotniskiTerminal' element={<Line8_Potniski />}></Route>
          <Route path='/Linija9/Koper' element={<Line9_Koper />}></Route>
          <Route path='/Linija10/Srmin' element={<Line10_Srmin />}></Route>
          <Route path='/Linija11/Banka' element={<Line11_Banka />}></Route>
          <Route path='/Linija11/Cimos' element={<Line11_Cimos />}></Route>
          <Route path='/Linija12/Sonce' element={<Line12_Sonce />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
