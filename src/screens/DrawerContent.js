import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://image.shutterstock.com/image-vector/avater-glyph-flat-vector-icon-260nw-1471589480.jpg',
                }}
                size={50}
              />
              <View>
                <Title style={styles.title}>Leeroy Phili</Title>
                <Caption style={styles.caption}>@LeeroyP</Caption>
              </View>
            </View>

            <View style={styles.row}>
                <View style={styles.section}>
                    <Paragraph style={styles.paragraph, styles.caption}>80</Paragraph>
                    <Caption>Following</Caption>
                </View>
                <View style={styles.section}>
                    <Paragraph style={styles.paragraph, styles.caption}>100</Paragraph>
                    <Caption>Followers</Caption>
                </View>
            </View>
          </View>
          
          <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
          icon={({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          )}
          label="Home"
          onPress={() => {}}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-outline" color={color} size={size} />
          )}
          label="Profile"
          onPress={() => {}}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="bookmark-outline" color={color} size={size} />
          )}
          label="Bookmark"
          onPress={() => {}}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-settings-outline" color={color} size={size} />
          )}
          label="Settings"
          onPress={() => {}}
        />
           <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-check-outline" color={color} size={size} />
          )}
          label="Support"
          onPress={() => {}}
        />
          </Drawer.Section>
        </View>


      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
