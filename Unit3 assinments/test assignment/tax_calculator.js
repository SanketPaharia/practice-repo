function calculation(income) {
    let amount ;
    if(income<500000){
        let tax_income = income - ((income*50)/100)

       let tax = checktax(tax_income)
        return tax
    }
    
    else if(income>500000 && income<1000000){
        let tax_income = income - ((income*30)/100)

      let  tax = checktax(tax_income)
        return tax

    }
    else if(income>1000000){
        let tax_income = income - 50000

       let tax = checktax(tax_income)

        return tax
    }

}

function checktax(tax_income){
    if (tax_income<250000){
        return 0
        
    }
   else if (tax_income>250000 && tax_income<500000){
        let tax = (tax_income *10)/100
        return tax
    }
   else if (tax_income>500000 && tax_income<1000000){
        let tax = (tax_income *20)/100
        return tax
    }
    else if (tax_income>1000000){
        let tax = (tax_income *30)/100
        return tax
    }
}

export default calculation