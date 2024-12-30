import Icon from '@components/global/Icon';
import IPOsScreen from '@features/ipos/Index';
import PanScreen from '@features/pans/Index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '@unistyles/Constants';

const Tab = createBottomTabNavigator();

const UserBottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'rocket' : 'rocket-outline'}
              size={24}
              color={Colors.lightText}
              iconFamily="Ionicons"
              style={
                {
                  // marginBottom: 8,
                }
              }
            />
          ),
          tabBarLabelStyle: {color: Colors.lightText},
        }}
        name="IPOs"
        component={IPOsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'people-sharp' : 'people-outline'}
              size={24}
              color={Colors.lightText}
              iconFamily="Ionicons"
              style={
                {
                  // marginBottom: 8,
                }
              }
            />
          ),
          tabBarLabelStyle: {color: Colors.lightText},
        }}
        name="PANs"
        component={PanScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'account-circle' : 'account-circle-outline'}
              size={24}
              color={Colors.lightText}
              iconFamily="MaterialCommunityIcons"
              style={
                {
                  // marginBottom: 8,
                }
              }
            />
          ),
          tabBarLabelStyle: {color: Colors.lightText},
        }}
        name="Account"
        component={PanScreen}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
