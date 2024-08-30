import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors, Fonts, Style} from '../../utils';

function Input({
  label,
  placeholder,
  customLabel,
  stylesContainer = {},
  iconLeft = null,
  stylesContainerInput = {},
  styleInput = {},
  argsProps,
  isDisplayError = true,
  touched,
  errors,
  value = '',
  keyboardType = 'default',
  autoFocus = false,
  handleChangeValues = () => {},
  onChange,
  name,
  onBlur,
  secureTextEntry = false,
  onChangeText = null,
  disabled = false,
}) {
  const isDisplayLabel = label || customLabel;
  const handleChangeText = values => {
    handleChangeValues(values);
    onChange(name, values);
  };

  const handleBlur = onBlur ? () => onBlur(name) : () => {};
  const displayError = isDisplayError && errors && touched;

  if (disabled) {
    return (
      <View>
        {label && (
          <Text style={[styles.labelDisable, Style.R_14_HEADER1]}>{label}</Text>
        )}
        <View style={styles.containerDisabled}>
          <Text style={styles.textDisable}>{value}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={stylesContainer}>
      {customLabel}
      {label && <Text style={[styles.label, Style.R_14_HEADER1]}>{label}</Text>}
      <View
        style={[styles.containerInput(isDisplayLabel), stylesContainerInput]}>
        {iconLeft}
        <TextInput
          style={[styles.input, styleInput]}
          placeholder={placeholder}
          onChangeText={onChangeText || handleChangeText}
          onBlur={handleBlur}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
          {...argsProps}
        />
      </View>
      {displayError && (
        <Text style={styles.textError}>{touched && errors}</Text>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  label: {},
  input: {
    height: 48,
    fontSize: 14,
    fontFamily: Fonts.PRIMARY_REGULAR,
    paddingHorizontal: 8,
    flex: 1,
  },
  containerInput: isDisplayLabel => ({
    flexDirection: 'row',
    borderWidth: 0.6,
    borderColor: Colors.BORDER,
    marginTop: isDisplayLabel ? 8 : 0,
    borderRadius: 6,
    alignItems: 'center',
  }),
  textError: {
    fontSize: 14,
    color: 'red',
    marginBottom: -6,
    marginTop: 5,
  },
  containerDisabled: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: Colors.CONTAINER_BACKGROUND,
  },
  labelDisable: {marginBottom: 8},
  textDisable: {
    color: Colors.HEADER1,
  },
});
