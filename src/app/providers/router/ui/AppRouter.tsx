import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from '../routerConfig'

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.entries(routerConfig)
                        .map(([key, { path, element }]) => (
                            <Route
                                key={key}
                                path={path}
                                element={(<div className="page-wrapper">{element}</div>)}
                            />
                        ))
                }
            </Routes>
        </Suspense>
    )
}

export { AppRouter }
