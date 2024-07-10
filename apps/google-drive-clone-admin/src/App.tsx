import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { FolderList } from "./folder/FolderList";
import { FolderCreate } from "./folder/FolderCreate";
import { FolderEdit } from "./folder/FolderEdit";
import { FolderShow } from "./folder/FolderShow";
import { SharedFileList } from "./sharedFile/SharedFileList";
import { SharedFileCreate } from "./sharedFile/SharedFileCreate";
import { SharedFileEdit } from "./sharedFile/SharedFileEdit";
import { SharedFileShow } from "./sharedFile/SharedFileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GoogleDriveClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="Folder"
          list={FolderList}
          edit={FolderEdit}
          create={FolderCreate}
          show={FolderShow}
        />
        <Resource
          name="SharedFile"
          list={SharedFileList}
          edit={SharedFileEdit}
          create={SharedFileCreate}
          show={SharedFileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
