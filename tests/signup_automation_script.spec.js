require('dotenv').config();
const { test, expect } = require('@playwright/test');
const MailosaurClient = require('mailosaur');

test('Sign Up automation', async ({ page }) => {

    const path = require('path'); 
    const mailosaur = new MailosaurClient(process.env.MAILOSAUR_API_KEY);
    const serverId = 'w6tzxo7z';
    const testEmail = `user${Date.now()}@${serverId}.mailosaur.net`;


    await page.goto('https://authorized-partner.vercel.app/', {
        waitUntil: 'domcontentloaded'
    });

    await page.getByText('Get Started').first().click();
    await page.waitForURL('**/register');
    await page.locator('#remember').check();
    await page.getByRole('button', { name: 'Continue' }).click();


    await page.waitForURL(/.*step=setup.*/);
    await page.getByLabel('First Name').fill('Unknown');
    await page.getByLabel('Last Name').fill('User');
    await page.getByLabel('Email Address').fill(testEmail);
    await page.locator('input[placeholder="00-00000000"]').fill('9805951198');
    await page.locator('input[type="password"]').first().fill('Password123!');
    await page.locator('input[type="password"]').nth(1).fill('Password123!');

    await Promise.all([
        page.waitForURL(/.*step=setup.*/),
        page.getByRole('button', { name: 'Next' }).click()
    ]);


    const signupEmail = await mailosaur.messages.get(
        serverId,
        {
            sentTo: testEmail,
            subject: 'Signup Confirm OTP'
        },
        {
            timeout: 60000
        }
    );

    const otp = signupEmail.html.codes[0].value;
    console.log('OTP received:', otp);

    const otpInput = page.locator('input').first();
    await otpInput.waitFor({ state: 'visible', timeout: 10000 });

    await otpInput.fill(otp);

    await Promise.all([
        page.waitForURL(/.*step=details.*/),
        page.getByRole('button', { name: 'Verify Code' }).click()
    ]);

    
    await expect(page).toHaveURL(/.*step=details.*/);

    await page.getByLabel('Name').fill('Black Eyed Peas');
    await page.getByLabel('Role in Agency').fill('Black Hat');
    await page.getByLabel('Email Address', { exact: true }).fill(testEmail);
    await page.getByLabel('Website').fill('www.blackeyedpeas.com');
    await page.getByLabel('Address', { exact: true }).fill('Streatford, Manchester, UK');

    await page.getByText('Select Your Region of Operation').click();
    await page.getByText('United Kingdom').click();

    await Promise.all([
        page.waitForURL(/.*step=professional-experience.*/),
        page.getByRole('button', { name: 'Next' }).click()
    ]);

    
    await page.getByText('Select Your Experience Level').click();
    await page.getByRole('option', { name: '3 years', exact: true }).click();

    await page.getByLabel('Number of Students Recruited Annually').fill('50');
    await page.getByLabel('Focus Area').fill('Undergraduate admissions to UK');
    await page.getByLabel('Success Metrics').fill('95');

    await page.getByText('Admission Applications').click();
    await page.getByText('Visa Processing').click();

    await Promise.all([
        page.waitForURL(/.*professional-experience.*/),
        page.getByRole('button', { name: 'Next' }).click()
    ]);

    await expect(page).not.toHaveURL(/.*professional-experience.*/);

    await expect(page).toHaveURL(/.*step=verification.*/);

  
    await page.getByLabel('Business Registration Number').fill('BRN-123456789');
    await page.getByText('Select Your Preferred Countries').click();
    await page.getByText('United Kingdom').click(); 

    await page.getByLabel('Universities').check();
    await page.getByLabel('Colleges').check();

    await page.getByLabel('Certification Details (Optional)').fill('Certified Education Agent');


    const file1 = path.join(__dirname,'..', 'Files', 'beautiful-shot-snowy-mountain-sunset.jpg');
    const file2 = path.join(__dirname,'..', 'Files', 'painting-mountain-lake-with-mountain-background.jpg');

    await page.locator('input[type="file"]').nth(0).setInputFiles(file1);
    await page.locator('input[type="file"]').nth(1).setInputFiles(file2);


    await page.getByRole('button', { name: 'Submit' }).click();

    await page.waitForURL('**/admin/profile');
    await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
});