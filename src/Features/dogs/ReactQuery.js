import React, { Suspense } from "react";
import Dog2 from "./Dog2";
import Dog1 from "./Dog1";
import { QueryClient, QueryClientProvider } from "react-query";

const ReactQuery = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <div>
      <p>{"ReactQuery"}</p>
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>LoAdInG</h1>}>
          <Dog2 />
          <Dog1 />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default ReactQuery;

// import React, { useEffect, useState } from "react";
// import { fetchDogs } from "./utils";
// import Dog2 from "./Dog2";
// import Dog1 from "./Dog1";

// const ReactQuery = () => {
//   const [dog, setDog] = useState([]);
//   useEffect(() => {
//     fetchDogs().then((r) => setDog(r));
//   }, []); // initial load
//   return (
//     <div>
//       <p>{"ReactQuery"}</p>
//       <Dog2 item={dog} />
//       <Dog1 item={dog} />
//     </div>
//   );
// };

// export default ReactQuery;
