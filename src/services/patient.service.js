import axios from "axios";
import authHeader from './auth.header';
const API_URL = "http://localhost:5000/api/patient/";

class patientService {
    createPatient(patientFirstName, patientLastName, appartment, address, city, state, zipCode, phoneNumber, email, dateOfBirth, ssn, height, weight, languageSpoke, race, signaturePath, date, testingSite) {
        return axios.post(API_URL + "create", { patientFirstName, patientLastName, appartment, address, city, state, zipCode, phoneNumber, email, dateOfBirth, ssn, height, weight, languageSpoke, race, signaturePath, date, testingSite }, { headers: authHeader() })
    }

    createPatientForm1(Patient_ID,
        akaName,
        noOfSexualPartners,
        medicalConditions,
        testingTreatmentPatient,
        primaryCareServicesPatient,
        annualHouseholdIncome,
        annualIndividualIncome,
        noOfPeopleInHousehold,
        ifHealthInsurance,
        ifAssistantProgram,
        ifTelemedicineVisit,
        drivingLicensePath,
        insuranceCardFrontPath,
        insuranceCardBackPath) {

        ifHealthInsurance = ifHealthInsurance[0] ? 1 : 0
        ifAssistantProgram = ifAssistantProgram[0] ? 1 : 0
        ifTelemedicineVisit = ifTelemedicineVisit[0] ? 1 : 0
        testingTreatmentPatient = testingTreatmentPatient ? 1 : 0
        primaryCareServicesPatient = primaryCareServicesPatient ? 1 : 0

        console.log(ifHealthInsurance)
        console.log(ifAssistantProgram)
        console.log(ifTelemedicineVisit)
        console.log(testingTreatmentPatient)
        console.log(primaryCareServicesPatient)


        return axios.post(API_URL + "Form1/create", {
            Patient_ID,
            akaName,
            noOfSexualPartners,
            medicalConditions,
            testingTreatmentPatient,
            primaryCareServicesPatient,
            annualHouseholdIncome,
            annualIndividualIncome,
            noOfPeopleInHousehold,
            ifHealthInsurance,
            ifAssistantProgram,
            ifTelemedicineVisit,
            drivingLicensePath,
            insuranceCardFrontPath,
            insuranceCardBackPath
        }, { headers: authHeader() })

    }

    createPatientForm2(Patient_ID,
        testerName,
        assets,
        annualIncome,
        noOfPeopleSupportedByIncome,
        medicareNo,
        ifRecievesMedicare,
        effectiveDateA,
        effectiveDateB,
        ifOtherInsurances,
        nameOfInsuranceCompany,
        policyNo,
        concerns) {


        ifRecievesMedicare = typeof (ifRecievesMedicare) == "string" && ifRecievesMedicare.toLowerCase() == "yes" ? 1 : 0
        ifOtherInsurances = typeof (ifOtherInsurances) == "string" && ifOtherInsurances.toLowerCase() == "yes" ? 1 : 0

        return axios.post(API_URL + "Form2/create", {
            Patient_ID,
            testerName,
            assets,
            annualIncome,
            noOfPeopleSupportedByIncome,
            medicareNo,
            ifRecievesMedicare,
            effectiveDateA,
            effectiveDateB,
            ifOtherInsurances,
            nameOfInsuranceCompany,
            policyNo,
            concerns
        }, { headers: authHeader() })
    }
    createPatientForm4(siteAddress, slotNumber, Patient_ID) {
        console.log(siteAddress, slotNumber, Patient_ID)
        return axios.post(API_URL + "Form4/create", {
            siteAddress,
            slotNumber,
            Patient_ID
        }, { headers: authHeader() })
    }

    createPatientForm5(witnessSignaturePath,
        legalRepresentativeRelationshipWithClient,
        physicianMailingAddress,
        Patient_ID) {

        return axios.post(API_URL + "Form5/create", {
            witnessSignaturePath,
            legalRepresentativeRelationshipWithClient,
            physicianMailingAddress,
            Patient_ID
        }, { headers: authHeader() })
    }

    createPatientForm6(healthCareProvSignPath, Patient_ID) {
        return axios.post(API_URL + "Form6/create", {
            healthCareProvSignPath: healthCareProvSignPath,
            Patient_ID: Patient_ID
        }, { headers: authHeader() })
    }

    createPatientForm11() {
        return axios.post(API_URL + "Form11/create", {

        }, { headers: authHeader() })
    }

    createPatientForm12() {
        return axios.post(API_URL + "Form12/create", {

        }, { headers: authHeader() })
    }

    updatePatient(ID, patientFirstName, patientLastName, appartment, address, city, state, zipCode, phoneNumber, email, dateOfBirth, ssn, height, weight, languageSpoke, race, signaturePath, date, testingSite) {
        return axios.post(API_URL + "update", { ID, patientFirstName, patientLastName, appartment, address, city, state, zipCode, phoneNumber, email, dateOfBirth, ssn, height, weight, languageSpoke, race, signaturePath, date, testingSite }, { headers: authHeader() })
    }



    getPatients() {
        return axios.get(API_URL + "selectAll", { headers: authHeader() })
    }
    getPatient(ID) {
        return axios.post(API_URL + "select", { ID }, { headers: authHeader() })
    }




    getPatientForm1(Patient_ID) {
        return axios.post(API_URL + "Form1/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm2(Patient_ID) {
        return axios.post(API_URL + "Form2/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm4(Patient_ID) {
        return axios.post(API_URL + "Form4/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm5(Patient_ID) {
        return axios.post(API_URL + "Form5/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm6(Patient_ID) {
        return axios.post(API_URL + "Form6/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm11(Patient_ID) {
        return axios.post(API_URL + "Form11/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm12(Patient_ID) {
        return axios.post(API_URL + "Form12/select", { Patient_ID }, { headers: authHeader() })
    }
    getPatientForm13(Patient_ID) {
        return axios.post(API_URL + "Form13/select", { Patient_ID }, { headers: authHeader() })
    }

    deletePatient(ID) {
        return axios.post(API_URL + "delete", { ID }, { headers: authHeader() })
    }

}

export default new patientService();