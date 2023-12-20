describe('LocalAndroidTest', () => {
    it('quickStartAndroidNativeDemo', myTest)
 })
 async function myTest() {
   const username = await $('id=com.digitalai.ExperiBank:id/usernameTextField');
   await username.setValue('company');
   const password = await $('id=com.digitalai.ExperiBank:id/passwordTextField');
   await password.setValue('company');
   const loginButton = await $('id=com.digitalai.ExperiBank:id/loginButton');
   await loginButton.click();
   const makePaymentButton = await $('id=com.digitalai.ExperiBank:id/makePaymentButton');
   await makePaymentButton.click();
   const phoneNumber = await $("id=com.digitalai.ExperiBank:id/phoneTextField");
   await phoneNumber.setValue('0541234567');
   const name = await $("id=com.digitalai.ExperiBank:id/nameTextField");
   await name.setValue('Jon Snow');
   const amount = await $("id=com.digitalai.ExperiBank:id/amountTextField");
   await amount.setValue('50');
   const countryButton = await $("id=com.digitalai.ExperiBank:id/countryTextField");
   await countryButton.click();
   const country = await $('//*[@text="Switzerland"]');
   await country.click();
   const sendPaymentButton = await $("id=com.digitalai.ExperiBank:id/sendPaymentButton");
   await sendPaymentButton.click();
   const yesButton = await $("android:id/button1");
   await yesButton.click();
 }