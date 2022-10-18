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
import WorkList from './pages/work/list'
import WorkDetail from './pages/work/detail'
import Footer from "./components/Footer.tsx";
import Praise from "./pages/praise";
import PraisePublish from "./pages/praise/publish";
import Mine from "./pages/mine";
import Schedule from "./pages/schedule";

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/activity" exact element={<Activity />} />
          <Route path="/activity/publish" element={<ActivityPublish />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/work/publish" element={<WorkPublish />} />
          <Route path="/work/list" exact element={<WorkList />} />
          <Route path="/work/list/:workId" element={<WorkDetail />} />
          <Route path="/praise" exact element={<Praise />} />
          <Route path="/praise/publish" element={<PraisePublish />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
