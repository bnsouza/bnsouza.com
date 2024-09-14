import data from "@/messages/resume_us.json";
import {Document, Font, Page, StyleSheet, Text, View} from "@react-pdf/renderer";

const fonte = {
  nome: "DM Sans ",
  regular: "https://raw.githubusercontent.com/googlefonts/dm-fonts/main/Sans/fonts/ttf/DMSans-Regular.ttf",
  bold: "https://raw.githubusercontent.com/googlefonts/dm-fonts/main/Sans/fonts/ttf/DMSans-Bold.ttf",
};

// const fonte = {
//   nome: "Lato",
//   regular: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
//   bold: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
// };

Font.register({
  family: fonte.nome,
  fonts: [{src: fonte.regular}, {src: fonte.bold, fontWeight: 700}],
});

// Desabilita a hifenização
Font.registerHyphenationCallback((word) => [word]);

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    fontFamily: fonte.nome,
    fontSize: 9,
    letterSpacing: -0.3,
    padding: 20,
  },
  header: {
    marginBottom: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerCol1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  headerCol2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  headerName: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: -0.35,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "medium",
  },
  headerContact: {
    fontSize: 8,
  },
  sectionHeader: {
    borderBottom: "1px solid #ccc",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: -0.35,
    marginBottom: 3,
    marginTop: 6,
    paddingBottom: 2,
  },
  summary: {
    marginBottom: 8,
  },
  itemHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemHeaderTitle: {
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: -0.35,
  },
  itemHeaderInfo: {},
  itemList: {
    marginBottom: 9,
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  itemListBullet: {
    width: 10,
  },
  itemListLine: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  itemListText: {
    width: "100%",
    lineHeight: 1.1,
    marginVertical: 1,
  },
  itemInline: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },
  itemInlineItem: {
    display: "flex",
    flexDirection: "row",
    marginRight: 20,
  },
  itemInlineBullet: {
    width: 10,
  },
  itemInlineText: {
    lineHeight: 1.1,
    marginVertical: 0.5,
  },
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header / Personal Information */}
      <View style={styles.header} fixed>
        <View style={styles.headerCol1}>
          <Text style={styles.headerName}>Bruno Nunes de Souza</Text>
          <Text style={styles.headerTitle}>{data.jobTitle}</Text>
        </View>
        <View style={styles.headerCol2}>
          <Text style={styles.headerContact}>bruno@nfenarede.com.br</Text>
          <Text style={styles.headerContact}>https://bnsouza.com</Text>
          <Text style={styles.headerContact}>+55 11 94726 4149</Text>
          <Text style={styles.headerContact}>São Paulo, SP, BRA</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View>
        <Text style={styles.sectionHeader}>{data.summary.label}</Text>
        <Text style={styles.summary}>{data.summary.text}</Text>
      </View>

      {/* Work Experience */}
      <View>
        <Text style={styles.sectionHeader}>{data.experiences.label}</Text>
        {data.experiences.items.map((e, index) => (
          <View key={index}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemHeaderTitle}>
                {e.company} - {e.title}
              </Text>
              <Text style={styles.itemHeaderInfo}>{e.dates}</Text>
            </View>
            <View style={styles.itemList}>
              {e.responsibilities.map((r, index) => (
                <View key={index} style={styles.itemListLine}>
                  <Text style={styles.itemListBullet}>•</Text>
                  <Text style={styles.itemListText} key={index}>
                    {r}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View>
        <Text style={styles.sectionHeader}>{data.education.label}</Text>
        {data.education.items.map((e, index) => (
          <View key={index}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemHeaderTitle}>
                {e.degree} - {e.school}
              </Text>
              <Text style={styles.itemHeaderInfo}>{e.dates}</Text>
            </View>
            <View style={styles.itemList}>
              <View style={styles.itemListLine}>
                <Text style={styles.itemListBullet}>•</Text>
                <Text style={styles.itemListText}>{e.note}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Languages */}
      <View>
        <Text style={styles.sectionHeader}>{data.languages.label}</Text>
        <View style={styles.itemInline}>
          {data.languages.items.map((l, index) => (
            <View key={index} style={styles.itemInlineItem}>
              <Text style={styles.itemInlineBullet}>•</Text>
              <Text style={styles.itemInlineText}>{l}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Skills */}
      <View>
        <Text style={styles.sectionHeader}>{data.skills.label}</Text>
        {data.skills.categories.map((s, index) => (
          <View key={index}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemHeaderTitle}>{s.label}</Text>
            </View>
            <View style={styles.itemInline}>
              <Text style={styles.itemInlineText}>{s.items.join(", ")}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Hobbies */}
      <View>
        <Text style={styles.sectionHeader}>{data.hobbies.label}</Text>
        {data.hobbies.items.map((h, index) => (
          <View key={index} style={styles.itemListLine}>
            <Text style={styles.itemListBullet}>•</Text>
            <Text style={styles.itemListText}>{h}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default Resume;
