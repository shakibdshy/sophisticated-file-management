// "use client";

// import { ReactNode } from "react";
// import {
//   LiveblocksProvider,
//   RoomProvider,
//   ClientSideSuspense,
// } from "@liveblocks/react/suspense";
// import { LiveMap } from "@liveblocks/client";
// import Loader from "@/components/liveblocks/Loader";

// export function Room({ children }: { children: ReactNode }) {
//   return (
//     <LiveblocksProvider
//       publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY!}
//     >
//       <RoomProvider
//         id="my-room"
//         initialPresence={{ cursor: null, cursorColor: null, editingText: null }}
//         initialStorage={{
//           canvasObjects: new LiveMap(),
//         }}
//       >
//         <ClientSideSuspense fallback={<Loader />}>
//           {children}
//         </ClientSideSuspense>
//       </RoomProvider>
//     </LiveblocksProvider>
//   );
// }
