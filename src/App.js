import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/index.tsx'
import Activity from './pages/activity/index.tsx'
import ActivityPublish from './pages/activity/publish/index.tsx'
import Work from './pages/work/index.tsx'
import WorkPublish from './pages/work/publish/index.tsx'
import WorkList from './pages/work/list/index.tsx'
import WorkDetail from './pages/work/detail/index.tsx'
import WorkAnalysis from './pages/work/analysis/index.tsx'
import Footer from "./components/Footer.tsx";
import Praise from "./pages/praise/index.tsx";
import PraisePublish from "./pages/praise/publish/index.tsx";
import Mine from "./pages/mine/index.tsx";
import Schedule from "./pages/schedule/index.tsx";
import PraiseRank from './pages/praise/rank/index.tsx'
import More from './pages/more/index.tsx'

import styles from './styles/common.module.scss'

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className={styles.safeBottom} style={{paddingBottom: '56px'}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/activity" exact element={<Activity />} />
            <Route path="/activity/publish" element={<ActivityPublish />} />
            <Route path="/work" exact element={<Work />} />
            <Route path="/work/publish" element={<WorkPublish />} />
            <Route path="/work/list" exact element={<WorkList />} />
            <Route path="/work/list/:workId" element={<WorkDetail />} />
            <Route path="/work/analysis" exact element={<WorkAnalysis />} />
            <Route path="/praise" exact element={<Praise />} />
            <Route path="/praise/rank" element={<PraiseRank />} />
            <Route path="/praise/publish" element={<PraisePublish />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
