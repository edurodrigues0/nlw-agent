import { Room } from "./pages/room";
import { CreateRoom } from "./pages/create-room";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoom />} />
          <Route element={<Room />} path="/rooms/:roomId" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
