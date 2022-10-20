import { router } from "../../config/router";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";

const DashBoardRoute = () => {
  return (
    <>
      <div className="dhashboardroutesmdiv">
        {router.map((route, index) => (
          <ListItem key={route.id} disablePadding>
            {route?.child === undefined && (
              <NavLink to={"../" + route.path} key={index}>
                {route.index}
              </NavLink>
            )}
            {route?.child !== undefined && route.child?.length > 0 && (
              <>
                <span
                  key={route.child}
                  id={route.id}
                  className="drawer-icon prntmenutitle"
                  to={"../" + route.path}
                >
                  {route.label}
                </span>
                {route?.child !== undefined &&
                  route?.child.map((children, i) => {
                    {
                      console.log(children.id);

                      return (
                        <NavLink
                          to={"../" + children.path}
                          key={children.id}
                          id={children.id}
                          style={{ display: "flex" }}
                          className="childmenutitle"
                        >
                          <ul className="childmenu">
                            <ListItem
                              className="drawer-icon "
                              style={{ display: "contents" }}
                            >
                              <>{children.icon}</>
                              <h6 className="">{children.label}</h6>
                            </ListItem>
                          </ul>
                        </NavLink>
                      );
                    }
                  })}
              </>
            )}

            {route?.child === undefined && (
              <NavLink to={"../" + route.path}>{route.label}</NavLink>
            )}
          </ListItem>
        ))}
      </div>
    </>
  );
};

export { DashBoardRoute };
