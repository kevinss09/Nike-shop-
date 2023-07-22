import "./assets/css/app.css";
import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
	Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Bag from "./pages/Bag";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import ScrollToTop from "./helpers/hooks/ScrollToTop";
import { ShopProvider } from "./helpers/reducer/ShopContext";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<ShopProvider>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/Men" element={<Men />} />
						<Route path="/Women" element={<Women />} />
						<Route path="/About" element={<About />} />
						<Route path="/Detail" element={<Detail />} />
						<Route path="/Bag" element={<Bag />} />
						<Route path="/Explore" element={<Explore />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
				</ShopProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
