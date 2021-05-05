import {Text, StyleSheet, View, TextInput} from "react-native";
import React from "react";


export default class ReportTemplate extends React.Component {
    constructor(props){
        super();
        const date = new Date("pt_PT");
        date.setFullYear(props.year, props.month, props.date);

        const days = {
            1: 'SEGUNDA',
            2: 'TERÇA',
            3: 'QUARTA',
            4: 'QUINTA',
            5: 'SEXTA',
            6: 'SÁBADO',
            7: 'DOMINGO'
        }

        this.state = {
            title: [ "Relatório Mensal", "Resumo do Mês em Curso"],
            month: date.toLocaleDateString(),
            date: `${days[date.getDay()]}, 0${date.getDate()} de 0${date.getMonth() + 1} de ${date.getFullYear()}`,
            labels:{
                Time: 'Tempo de serviço',
                Hours: 'Horas',
                Minutes: 'Minutos',
                Visits: 'Revisitas',
                Studies: {
                    subtitle: 'Estudos',
                    _new : 'Novos',
                    _old : 'Antigos'
                },
                Publications: 'Publicações',
                Videos: 'Videos',
            },
            hours: '',
            munutes: '',
            revisits: '',
            studies: '',
            publications: '',
            videos: ' ',
            remarks: ' ',
            placeholders: {
                hours: 'Horas de serviço',
                minutes: 'Munutos de serviço',
                _newOrOldStudies: 'Número de estudos',

            },
            editable : {
                yes: true,
                no: false
            }
        }
    }

    render(){
        return <View style={styles.container}>

            <Text style={{fontSize: 24, marginTop: 16, backgroundColor: 'lightgray', padding: 8 }}>{this.state.title[1]}</Text>
            <Text style={{borderColor: 'black', fontSize: 20, margin: 16 }}>
                {this.state.date}
            </Text>
            
            <View style={styles.subtitems}>
                <Text style={styles.labels}>
                    {this.state.labels.Time}
                </Text>
                <View style={{width: '49%', marginRight: "1%"}}>
                    <Text style={styles.sublabels}> {this.state.labels.Hours}</Text>
                    <TextInput
                        style={styles.values}
                        id = 'hours'
                        placeholder={this.state.placeholders.hours}
                        editable = {this.state.editable.no}
                    />
                </View>
                <View style={{width: '49%', marginLeft: "1%"}}>
                    <Text style={styles.sublabels}> {this.state.labels.Minutes}</Text>
                    <TextInput
                        style={styles.values}
                        placeholder={this.state.placeholders.minutes}
                    />
                </View>
            </View>

            <View style={styles.items}>
                <Text style={styles.labels}>
                    {this.state.labels.Visits}
                </Text>
                <TextInput
                    style={styles.values}
                    placeholder="Número de revisitas"
                />
            </View>

            <View style={styles.subtitems}>
                <Text style={styles.labels}>
                    {this.state.labels.Studies.subtitle}
                </Text>
                <View style={{width: '49%', marginRight: "1%"}}>
                    <Text style={styles.sublabels}> {this.state.labels.Studies._old}</Text>
                    <TextInput
                        style={styles.values}
                        id = 'hours'
                        placeholder={this.state.placeholders._newOrOldStudies}
                    />
                </View>
                <View style={{width: '49%', marginLeft: "1%"}}>
                    <Text style={styles.sublabels}> {this.state.labels.Studies._new}</Text>
                    <TextInput
                        style={styles.values}
                        placeholder={this.state.placeholders._newOrOldStudies}
                    />
                </View>
            </View>

            <View style={styles.subtitems}>
                <View style={{width: '49%', marginRight: '1%'}}>
                    <Text style={styles.labels}>
                        {this.state.labels.Publications}
                    </Text>
                    <TextInput
                        style={styles.values}
                        placeholder="Número de estudos"
                    />
                </View>
                <View style={{width: '49%', marginLeft: '1%'}}>
                        <Text style={styles.labels}>
                            {this.state.labels.Videos}
                        </Text>
                        <TextInput
                            style={styles.values}
                            placeholder="Número de estudos"
                        />
                </View> 
            </View>
            
        </View>
    }
    
    setDate = (year, month, date) =>{
        return new Date().setFullYear(year, month, date)
    }
}

const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'lightgrey',
            //flexWrap: 'wrap',
            width: '100%',
            padding: 16,
        },

        labels: {
            fontFamily: 'Roboto',
            fontSize: 18,
            width: 128,
            backgroundColor: 'teal',
            fontWeight: 'bold',
            padding: 8,
            marginBottom: 4,
            width: '100%',
        },

        sublabels: {
            color: 'gray', 
            fontWeight: 'bold',
            fontSize: 18,
            alignSelf: 'center'
        },

        items:{
            display: 'flex', 
            flexWrap: 'wrap',
            marginBottom: 16
        },

        subtitems:{
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 16,
        },
        pub_videos : {
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginBottom: 16
        },
        values : {
            backgroundColor: 'lightgray',
            padding: 4,
            minHeight: 36        
        }


    }
)
