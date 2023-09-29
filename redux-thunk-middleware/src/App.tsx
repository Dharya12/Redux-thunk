
import './App.css';
import LoadingImages from "./components/loadingImages/loadingImages";


//  function  App() {
//   // const dispatch = useDispatch();
//   // useAppDispatch(fetchProductData());
//   const [buttonClick , setButtonClick] = useState <boolean> (false);
//   const [loadData , setLoadData] = useState <boolean> (false);
//   const dispatch = useAppDispatch ();
  
//   // useEffect(()=>{
//   //   dispatch(fetchImageData());
//   // } ,[dispatch])
//   const handleClick = useCallback(() =>{
//     setLoadData(true);
//     setTimeout(()=>{
//       setButtonClick(true);
//       setLoadData(false);
//     },1000); 
//     dispatch(fetchImageData());
//   },[dispatch])
//   const getLoadingState = useSelector((state : RootState) => state.products.isLoading);
//   const getData = useSelector((state : RootState) => state.products.contents);
  
//   const newData =  getData.flat().map((item) => {return item});
//   setTimeout(() => {
//     console.log("ISLOADING : " , getLoadingState);
//   }, 1000);

//   return (
//     <>
//       {!loadData ? (!buttonClick && <button onClick={handleClick} disabled={buttonClick ? true : false}>FETCH DATA</button>) : <h2>Loading Data.........</h2>}
//       {/* {loadData ? <LoadingData /> : null} */}
//       <div style={{display : 'flex', flexWrap : 'wrap'}}>
         
//         {newData?.map((item , index) => 
//           {
//             return  (
//             <div key={index}>
//               {buttonClick && <img  src={item?.url} style={{width : "200px" , margin : "5px"}}></img>}
//             </div>)}
//         )}
//     </div>
//     </>
//   )
// }
function App () {
  return (
    <LoadingImages />
  )
}
export default App;