

// import { useEffect, useState } from 'react';

// export default function Example() {
//   const [news, setNews] = useState([]);
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

//   const url = 'https://newsapi.org/v2/everything?q=finance&apiKey=5cdbd4a506bd417285a4305d1bee189c';

//   const fetchApiData = () => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setNews(data.articles);
//         // Generate a random index to display a random news article
//         const randomIndex = Math.floor(Math.random() * data.articles.length);
//         setCurrentNewsIndex(randomIndex);
//       });
//   }

//   useEffect(() => {
//     fetchApiData();
//   }, []);

//   // Function to display the next news article
//   const showNextNews = () => {
//     if (currentNewsIndex < news.length - 1) {
//       setCurrentNewsIndex(currentNewsIndex + 1);
//     }
//   }

//   // Function to display the previous news article
//   const showPreviousNews = () => {
//     if (currentNewsIndex > 0) {
//       setCurrentNewsIndex(currentNewsIndex - 1);
//     }
//   }

//   return (
   
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {news.length > 0 && (
//           <div className="mx-auto flex max-w-md flex-col gap-y-4">
//             <img
//               src={news[currentNewsIndex].urlToImage}
//               alt={news[currentNewsIndex].title}
//               className="max-w-full h-auto"
//             />
//             <h2 className="text-lg font-bold leading-6 text-white-600">{news[currentNewsIndex].title}</h2>
//             <p className="text-gray-600">{news[currentNewsIndex].content}</p>
            
//           </div>
          
//         )}

// <div className="mt-4 flex justify-between">
// <button
//   onClick={showPreviousNews}
//   disabled={currentNewsIndex === 0}
//   className="mt-8 bg-mj-yellow text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2"
// >
// {'<'}
// </button>
// <button
//   onClick={showNextNews}
//   disabled={currentNewsIndex === news.length - 1}
//   className="mt-8 bg-mj-yellow text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2"
// >
// {'>'}
// </button>
// </div>
//       </div>

 
//   );
// }


  
import { useEffect, useState } from 'react';

export default function Example() {
  const [news, setNews] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const url = 'https://newsapi.org/v2/everything?q="finance"+"savings"&apiKey=5cdbd4a506bd417285a4305d1bee189c';

  const fetchApiData = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNews(data.articles);
        // Generate a random index to display a random news article
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setCurrentNewsIndex(randomIndex);
      });
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  // Function to display the next news article
  const showNextNews = () => {
    if (currentNewsIndex < news.length - 1) {
      setCurrentNewsIndex(currentNewsIndex + 1);
    }
  }

  // Function to display the previous news article
  const showPreviousNews = () => {
    if (currentNewsIndex > 0) {
      setCurrentNewsIndex(currentNewsIndex - 1);
    }
  }

  return (
    <div>
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center">
       
        <button
          onClick={showPreviousNews}
          disabled={currentNewsIndex === 0}
          className={`px-4 py-2  rounded-lg ${currentNewsIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {'<'}
        </button>

        {news.length > 0 && (
          <div className="mx-auto flex max-w-md flex-col gap-y-4">
            <img
              src={news[currentNewsIndex].urlToImage}
              alt={news[currentNewsIndex].title}
              className="max-w-full h-auto"
            />
            <h2 className="text-lg font-bold leading-6 text-white-600">{news[currentNewsIndex].title}</h2>
            <p className="text-gray-600">{news[currentNewsIndex].content}</p>
          </div>
        )}

        <button
          onClick={showNextNews}
          disabled={currentNewsIndex === news.length - 1}
          className={`px-4 py-2  rounded-lg ${currentNewsIndex === news.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {'>'}
        </button>
      </div>
      </div>
   
  );
}
