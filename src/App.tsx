import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import { I18nProvider } from "./context/provider";
import { PATH_PAGE } from "./routes/paths";
import { LoadingPage } from "./views";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MoviePage = lazy(() => import("./views/MoviePage"));
const FilePage = lazy(() => import("./views/FilePage"));
const NotfoundPage = lazy(() => import("./views/NotfoundPage"));

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <LayoutWrapper>
                  <HomePage />
                </LayoutWrapper>
              </Suspense>
            }
          />
          <Route
            path={PATH_PAGE.movies}
            element={
              <Suspense fallback={<LoadingPage />}>
                <LayoutWrapper>
                  <MoviesPage />
                </LayoutWrapper>
              </Suspense>
            }
          />
          <Route
            path={PATH_PAGE.file}
            element={
              <Suspense fallback={<LoadingPage />}>
                <LayoutWrapper>
                  <FilePage />
                </LayoutWrapper>
              </Suspense>
            }
          />
          <Route
            path={PATH_PAGE.movieWatch}
            element={
              <Suspense fallback={<LoadingPage />}>
                <LayoutWrapper>
                  <MoviePage />
                </LayoutWrapper>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingPage />}>
                <NotfoundPage />
              </Suspense>
            }
          />
          <Route
            path={PATH_PAGE.notfound}
            element={
              <Suspense fallback={<LoadingPage />}>
                <NotfoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
