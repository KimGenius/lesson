package kr.rinc.ri.basicandroid2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final EditText num1 = findViewById(R.id.num1);
        final EditText num2 = findViewById(R.id.num2);
        final Button button = findViewById(R.id.plus);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int num1Value = Integer.parseInt(num1.getText().toString());
                int num2Value = Integer.parseInt(num2.getText().toString());
                int result = num1Value + num2Value;
                button.setText(result+"");
            }
        });
    }
}
