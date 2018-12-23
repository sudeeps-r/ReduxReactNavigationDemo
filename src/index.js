import { createStackNavigator, createAppContainer ,createMaterialTopTabNavigator,createSwitchNavigator} from "react-navigation";
import HomeScreen from './home/Home'
import Tab1 from './Tab/Tab1'
import Tab2 from './Tab/Tab2'

const HomeNavigator = createStackNavigator({
    Home:HomeScreen
})

const TabNavigator  = createMaterialTopTabNavigator({
    Tab1:Tab1,
    Tab2:Tab2
},{
    initialRouteName:'Tab2',
    tabBarOptions :{
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      backgroundColor: 'blue',
    },
  }})
const TabHeader = createStackNavigator({
    TabNavigator: TabNavigator
})
const  AppRootSwitcher = createSwitchNavigator({
    TabNavigator: TabHeader,
    HomeNavigator: HomeNavigator
},{
    initialRouteName:'HomeNavigator'
})
const AppContainer=createAppContainer(AppRootSwitcher)
export default AppContainer