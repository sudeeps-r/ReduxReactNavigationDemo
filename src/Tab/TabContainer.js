import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";

import Tab1 from './Tab1'
import Tab2 from './Tab2'

const TabNavigator  = createBottomTabNavigator({
    Tab1:Tab1,
    Tab2:Tab2
})

export default createAppContainer(TabNavigator)