import UseNavigation from "../Hooks/Use-navigation";

function Route({ path, children }) {
	const { currentPath } = UseNavigation();

	if (currentPath === path){
		return children;
	}

	return null;
}

export default Route;