import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
    paddingTop: 40,
    paddingBottom: 40,
    width: "80%",

  },
  textColor: {
    marginTop: 100,
    color: colors.white,
    fontFamily: "Poppins-Medium",
  },
  cleanButton: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.disableColor,
    borderRadius: 10,
  },
  confirmButton: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.actionColor,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    fontWeight: "300",
  },
});

export default styles;
