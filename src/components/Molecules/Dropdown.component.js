import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {Colors, Style} from '../../utils';
import Icon from 'react-native-vector-icons/AntDesign';
import {isEmpty} from 'lodash';

const checkRenderTrigger = (
  renderDisplaySelect,
  selected,
  placeholder,
  name,
) => {
  if (renderDisplaySelect && !isEmpty(selected)) {
    return renderDisplaySelect(selected);
  }

  if (isEmpty(selected)) {
    return (
      <View style={styles.containerTrigger}>
        {!!placeholder && <Text>{placeholder}</Text>}
        <Icon style={styles.icon} name="down" />
      </View>
    );
  }
  return (
    <View style={styles.containerTrigger}>
      <Text>{selected[`${name}`]}</Text>
      <Icon style={styles.icon} name="down" />
    </View>
  );
};

const renderItem = ({item}, name, setSelectDropdown) => {
  return (
    <MenuOption onSelect={() => setSelectDropdown(item)}>
      <View style={styles.containerItem}>
        <Text>{item[`${name}`]}</Text>
      </View>
    </MenuOption>
  );
};

function Dropdown({
  placeholder,
  data,
  name,
  keyExtractor = null,
  title,
  setSelectDropdown,
  selected,
  disable = false,
  renderCustomItem = () => {},
  renderDisplaySelect = null,
}) {
  if (disable) {
    return (
      <View>
        <Text style={[styles.label, Style.R_14_HEADER1]}>{title}</Text>
        <View style={styles.containerTriggerDisable}>
          {!isEmpty(selected) && (
            <Text style={Style.R_14_DISABLE_DROPDOWN}>
              {selected[`${name}`]}
            </Text>
          )}
          {isEmpty(selected) && (
            <Text style={Style.R_14_DISABLE_DROPDOWN}>{placeholder}</Text>
          )}
          <Icon style={styles.iconDisable} name="down" />
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={[styles.label, Style.R_14_HEADER1]}>{title}</Text>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          {checkRenderTrigger(renderDisplaySelect, selected, placeholder, name)}
        </MenuTrigger>
        <MenuOptions>
          <View style={styles.listContainer}>
            <Text style={[styles.textTitle, Style.B_16_HEADER1]}>{title}</Text>
            <FlatList
              data={data}
              renderItem={item =>
                renderCustomItem(item) ||
                renderItem(item, name, setSelectDropdown)
              }
              keyExtractor={(item, index) =>
                keyExtractor ? `${item[keyExtractor]}` : `'${index}'`
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
        </MenuOptions>
      </Menu>
    </View>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  listContainer: {
    maxHeight: 350,
    borderTopWidth: 0.2,
    borderTopColor: Colors.BORDER,
  },
  containerTrigger: {
    borderColor: Colors.BORDER,
    borderWidth: 0.6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerItem: {
    borderBottomColor: Colors.BORDER,
    borderBottomWidth: 0.6,
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 14,
  },
  textTitle: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: Colors.DISABLE,
  },
  containerLine: {
    width: Dimensions.get('window').width,
    height: 1,
  },
  icon: {
    fontSize: 14,
    color: Colors.HEADER1,
  },
  label: {
    marginBottom: 8,
  },
  iconDisable: {
    color: Colors.DISABLE_DROPDOWN,
  },
  containerTriggerDisable: {
    borderColor: Colors.DISABLE_DROPDOWN,
    borderWidth: 0.6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
